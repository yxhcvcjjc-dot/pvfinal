#!/usr/bin/env python3
"""
Backend API Testing Script for Exams Made Easy
Tests authentication and admin endpoints with seeded MongoDB data
"""

import requests
import json
from datetime import datetime, timezone, timedelta
from pymongo import MongoClient
import sys

# Configuration
BASE_URL = "https://line-parser.preview.emergentagent.com/api"
MONGO_URL = "mongodb://localhost:27017"
DB_NAME = "test_database"

# Test data
OWNER_EMAIL = "yxhcvcjjc@gmail.com"
OWNER_TOKEN = "owner_test_token_" + str(int(datetime.now().timestamp()))
OWNER_USER_ID = "test_owner_" + str(int(datetime.now().timestamp()))

NORMAL_EMAIL = "normal@example.com"
NORMAL_TOKEN = "normal_test_token_" + str(int(datetime.now().timestamp()))
NORMAL_USER_ID = "test_normal_" + str(int(datetime.now().timestamp()))

# Test results
test_results = []
failed_tests = []

def log_test(name, passed, details=""):
    """Log test result"""
    status = "✅ PASS" if passed else "❌ FAIL"
    result = f"{status}: {name}"
    if details:
        result += f" - {details}"
    print(result)
    test_results.append({"name": name, "passed": passed, "details": details})
    if not passed:
        failed_tests.append({"name": name, "details": details})

def seed_test_data():
    """Seed test users and sessions in MongoDB"""
    print("\n" + "="*80)
    print("SEEDING TEST DATA IN MONGODB")
    print("="*80)
    
    try:
        client = MongoClient(MONGO_URL)
        db = client[DB_NAME]
        
        # Create owner user
        owner_user = {
            "user_id": OWNER_USER_ID,
            "email": OWNER_EMAIL,
            "name": "Test Owner",
            "picture": "https://via.placeholder.com/150",
            "phone": "+91 9000000000",
            "access": True,
            "is_owner": True,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        db.users.insert_one(owner_user)
        print(f"✓ Created owner user: {OWNER_EMAIL} (user_id: {OWNER_USER_ID})")
        
        # Create owner session
        owner_session = {
            "user_id": OWNER_USER_ID,
            "session_token": OWNER_TOKEN,
            "expires_at": datetime.now(timezone.utc) + timedelta(days=7),
            "created_at": datetime.now(timezone.utc)
        }
        db.user_sessions.insert_one(owner_session)
        print(f"✓ Created owner session: {OWNER_TOKEN}")
        
        # Create normal user
        normal_user = {
            "user_id": NORMAL_USER_ID,
            "email": NORMAL_EMAIL,
            "name": "Normal User",
            "picture": "https://via.placeholder.com/150",
            "phone": "",
            "access": False,
            "is_owner": False,
            "created_at": datetime.now(timezone.utc).isoformat()
        }
        db.users.insert_one(normal_user)
        print(f"✓ Created normal user: {NORMAL_EMAIL} (user_id: {NORMAL_USER_ID})")
        
        # Create normal session
        normal_session = {
            "user_id": NORMAL_USER_ID,
            "session_token": NORMAL_TOKEN,
            "expires_at": datetime.now(timezone.utc) + timedelta(days=7),
            "created_at": datetime.now(timezone.utc)
        }
        db.user_sessions.insert_one(normal_session)
        print(f"✓ Created normal session: {NORMAL_TOKEN}")
        
        client.close()
        print("✓ Test data seeded successfully\n")
        return True
        
    except Exception as e:
        print(f"✗ Failed to seed test data: {e}")
        return False

def cleanup_test_data():
    """Remove test users and sessions from MongoDB"""
    print("\n" + "="*80)
    print("CLEANING UP TEST DATA")
    print("="*80)
    
    try:
        client = MongoClient(MONGO_URL)
        db = client[DB_NAME]
        
        # Delete test users
        result = db.users.delete_many({
            "user_id": {"$in": [OWNER_USER_ID, NORMAL_USER_ID]}
        })
        print(f"✓ Deleted {result.deleted_count} test users")
        
        # Delete test sessions
        result = db.user_sessions.delete_many({
            "session_token": {"$in": [OWNER_TOKEN, NORMAL_TOKEN]}
        })
        print(f"✓ Deleted {result.deleted_count} test sessions")
        
        # Also clean up any sessions for test users
        result = db.user_sessions.delete_many({
            "user_id": {"$in": [OWNER_USER_ID, NORMAL_USER_ID]}
        })
        if result.deleted_count > 0:
            print(f"✓ Deleted {result.deleted_count} additional test sessions")
        
        client.close()
        print("✓ Cleanup completed\n")
        
    except Exception as e:
        print(f"✗ Failed to cleanup test data: {e}")

def test_auth_me_owner():
    """Test GET /api/auth/me with owner token"""
    try:
        headers = {"Authorization": f"Bearer {OWNER_TOKEN}"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            # Check required fields
            checks = [
                data.get("email") == OWNER_EMAIL,
                data.get("is_owner") == True,
                data.get("access") == True,
                "_id" not in data,  # Should not leak MongoDB _id
                "user_id" in data
            ]
            if all(checks):
                log_test("GET /api/auth/me (owner token)", True, 
                        f"Returns owner user with is_owner=True, access=True, no _id leaked")
            else:
                log_test("GET /api/auth/me (owner token)", False, 
                        f"Response validation failed: {json.dumps(data)}")
        else:
            log_test("GET /api/auth/me (owner token)", False, 
                    f"Expected 200, got {response.status_code}: {response.text}")
    except Exception as e:
        log_test("GET /api/auth/me (owner token)", False, f"Exception: {e}")

def test_auth_me_normal():
    """Test GET /api/auth/me with normal token"""
    try:
        headers = {"Authorization": f"Bearer {NORMAL_TOKEN}"}
        response = requests.get(f"{BASE_URL}/auth/me", headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            checks = [
                data.get("email") == NORMAL_EMAIL,
                data.get("access") == False,
                "_id" not in data
            ]
            if all(checks):
                log_test("GET /api/auth/me (normal token)", True, 
                        f"Returns normal user with access=False")
            else:
                log_test("GET /api/auth/me (normal token)", False, 
                        f"Response validation failed: {json.dumps(data)}")
        else:
            log_test("GET /api/auth/me (normal token)", False, 
                    f"Expected 200, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/auth/me (normal token)", False, f"Exception: {e}")

def test_auth_me_no_token():
    """Test GET /api/auth/me without token"""
    try:
        response = requests.get(f"{BASE_URL}/auth/me", timeout=10)
        
        if response.status_code == 401:
            log_test("GET /api/auth/me (no token)", True, "Returns 401 as expected")
        else:
            log_test("GET /api/auth/me (no token)", False, 
                    f"Expected 401, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/auth/me (no token)", False, f"Exception: {e}")

def test_update_phone():
    """Test POST /api/user/phone with normal token"""
    try:
        headers = {"Authorization": f"Bearer {NORMAL_TOKEN}", "Content-Type": "application/json"}
        payload = {"phone": "+91 9123456789"}
        response = requests.post(f"{BASE_URL}/user/phone", headers=headers, 
                                json=payload, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("phone") == "+91 9123456789":
                # Verify via /auth/me
                verify_response = requests.get(f"{BASE_URL}/auth/me", 
                                              headers={"Authorization": f"Bearer {NORMAL_TOKEN}"}, 
                                              timeout=10)
                if verify_response.status_code == 200:
                    verify_data = verify_response.json()
                    if verify_data.get("phone") == "+91 9123456789":
                        log_test("POST /api/user/phone (normal token)", True, 
                                "Phone updated and verified")
                    else:
                        log_test("POST /api/user/phone (normal token)", False, 
                                "Phone not reflected in /auth/me")
                else:
                    log_test("POST /api/user/phone (normal token)", False, 
                            "Could not verify phone update")
            else:
                log_test("POST /api/user/phone (normal token)", False, 
                        f"Phone not updated correctly: {data}")
        else:
            log_test("POST /api/user/phone (normal token)", False, 
                    f"Expected 200, got {response.status_code}: {response.text}")
    except Exception as e:
        log_test("POST /api/user/phone (normal token)", False, f"Exception: {e}")

def test_admin_users_owner():
    """Test GET /api/admin/users with owner token"""
    try:
        headers = {"Authorization": f"Bearer {OWNER_TOKEN}"}
        response = requests.get(f"{BASE_URL}/admin/users", headers=headers, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            checks = [
                "count" in data,
                "users" in data,
                isinstance(data["users"], list),
                data["count"] >= 2  # At least our 2 test users
            ]
            # Check that our test users are in the list
            user_emails = [u.get("email") for u in data["users"]]
            checks.append(OWNER_EMAIL in user_emails)
            checks.append(NORMAL_EMAIL in user_emails)
            
            # Check no _id leaked
            has_id = any("_id" in u for u in data["users"])
            checks.append(not has_id)
            
            if all(checks):
                log_test("GET /api/admin/users (owner token)", True, 
                        f"Returns {{count, users[]}}, found {data['count']} users, no _id leaked")
            else:
                log_test("GET /api/admin/users (owner token)", False, 
                        f"Response validation failed: count={data.get('count')}, has_id={has_id}")
        else:
            log_test("GET /api/admin/users (owner token)", False, 
                    f"Expected 200, got {response.status_code}: {response.text}")
    except Exception as e:
        log_test("GET /api/admin/users (owner token)", False, f"Exception: {e}")

def test_admin_users_normal():
    """Test GET /api/admin/users with normal token (should fail)"""
    try:
        headers = {"Authorization": f"Bearer {NORMAL_TOKEN}"}
        response = requests.get(f"{BASE_URL}/admin/users", headers=headers, timeout=10)
        
        if response.status_code == 403:
            log_test("GET /api/admin/users (normal token)", True, "Returns 403 as expected")
        else:
            log_test("GET /api/admin/users (normal token)", False, 
                    f"Expected 403, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/admin/users (normal token)", False, f"Exception: {e}")

def test_admin_users_no_token():
    """Test GET /api/admin/users without token (should fail)"""
    try:
        response = requests.get(f"{BASE_URL}/admin/users", timeout=10)
        
        if response.status_code == 403:
            log_test("GET /api/admin/users (no token)", True, "Returns 403 as expected")
        else:
            log_test("GET /api/admin/users (no token)", False, 
                    f"Expected 403, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/admin/users (no token)", False, f"Exception: {e}")

def test_set_access_owner():
    """Test PATCH /api/admin/users/{user_id}/access with owner token"""
    try:
        headers = {"Authorization": f"Bearer {OWNER_TOKEN}", "Content-Type": "application/json"}
        payload = {"access": True}
        response = requests.patch(f"{BASE_URL}/admin/users/{NORMAL_USER_ID}/access", 
                                 headers=headers, json=payload, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get("access") == True:
                # Verify via /admin/users
                verify_response = requests.get(f"{BASE_URL}/admin/users", 
                                              headers={"Authorization": f"Bearer {OWNER_TOKEN}"}, 
                                              timeout=10)
                if verify_response.status_code == 200:
                    verify_data = verify_response.json()
                    normal_user = next((u for u in verify_data["users"] 
                                       if u.get("user_id") == NORMAL_USER_ID), None)
                    if normal_user and normal_user.get("access") == True:
                        log_test("PATCH /api/admin/users/{user_id}/access (owner token)", True, 
                                "Access updated to True and verified")
                    else:
                        log_test("PATCH /api/admin/users/{user_id}/access (owner token)", False, 
                                "Access not reflected in /admin/users")
                else:
                    log_test("PATCH /api/admin/users/{user_id}/access (owner token)", False, 
                            "Could not verify access update")
            else:
                log_test("PATCH /api/admin/users/{user_id}/access (owner token)", False, 
                        f"Access not updated: {data}")
        else:
            log_test("PATCH /api/admin/users/{user_id}/access (owner token)", False, 
                    f"Expected 200, got {response.status_code}: {response.text}")
    except Exception as e:
        log_test("PATCH /api/admin/users/{user_id}/access (owner token)", False, f"Exception: {e}")

def test_set_access_normal():
    """Test PATCH /api/admin/users/{user_id}/access with normal token (should fail)"""
    try:
        headers = {"Authorization": f"Bearer {NORMAL_TOKEN}", "Content-Type": "application/json"}
        payload = {"access": True}
        response = requests.patch(f"{BASE_URL}/admin/users/{NORMAL_USER_ID}/access", 
                                 headers=headers, json=payload, timeout=10)
        
        if response.status_code == 403:
            log_test("PATCH /api/admin/users/{user_id}/access (normal token)", True, 
                    "Returns 403 as expected")
        else:
            log_test("PATCH /api/admin/users/{user_id}/access (normal token)", False, 
                    f"Expected 403, got {response.status_code}")
    except Exception as e:
        log_test("PATCH /api/admin/users/{user_id}/access (normal token)", False, f"Exception: {e}")

def test_logout():
    """Test POST /api/auth/logout with owner token"""
    try:
        headers = {"Authorization": f"Bearer {OWNER_TOKEN}"}
        response = requests.post(f"{BASE_URL}/auth/logout", headers=headers, timeout=10)
        
        if response.status_code == 200:
            # Verify session is deleted by trying to use the token
            verify_response = requests.get(f"{BASE_URL}/auth/me", 
                                          headers={"Authorization": f"Bearer {OWNER_TOKEN}"}, 
                                          timeout=10)
            if verify_response.status_code == 401:
                log_test("POST /api/auth/logout (owner token)", True, 
                        "Session deleted, subsequent /auth/me returns 401")
            else:
                log_test("POST /api/auth/logout (owner token)", False, 
                        f"Session not deleted, /auth/me returned {verify_response.status_code}")
        else:
            log_test("POST /api/auth/logout (owner token)", False, 
                    f"Expected 200, got {response.status_code}")
    except Exception as e:
        log_test("POST /api/auth/logout (owner token)", False, f"Exception: {e}")

def test_auth_session_missing_header():
    """Test POST /api/auth/session without X-Session-ID header"""
    try:
        response = requests.post(f"{BASE_URL}/auth/session", timeout=10)
        
        if response.status_code == 400:
            log_test("POST /api/auth/session (missing X-Session-ID)", True, 
                    "Returns 400 as expected")
        else:
            log_test("POST /api/auth/session (missing X-Session-ID)", False, 
                    f"Expected 400, got {response.status_code}")
    except Exception as e:
        log_test("POST /api/auth/session (missing X-Session-ID)", False, f"Exception: {e}")

def test_regression_endpoints():
    """Test existing endpoints to ensure they still work (regression)"""
    print("\n" + "="*80)
    print("REGRESSION TESTS - Existing Endpoints")
    print("="*80)
    
    # Test GET /api/questions
    try:
        response = requests.get(f"{BASE_URL}/questions?subject=physics", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                log_test("GET /api/questions (regression)", True, 
                        f"Returns list of {len(data)} questions")
            else:
                log_test("GET /api/questions (regression)", False, 
                        "Response is not a list")
        else:
            log_test("GET /api/questions (regression)", False, 
                    f"Expected 200, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/questions (regression)", False, f"Exception: {e}")
    
    # Test GET /api/subjects
    try:
        response = requests.get(f"{BASE_URL}/subjects", timeout=10)
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list) and len(data) > 0:
                log_test("GET /api/subjects (regression)", True, 
                        f"Returns list of {len(data)} subjects")
            else:
                log_test("GET /api/subjects (regression)", False, 
                        "Response validation failed")
        else:
            log_test("GET /api/subjects (regression)", False, 
                    f"Expected 200, got {response.status_code}")
    except Exception as e:
        log_test("GET /api/subjects (regression)", False, f"Exception: {e}")

def print_summary():
    """Print test summary"""
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    
    total = len(test_results)
    passed = sum(1 for t in test_results if t["passed"])
    failed = total - passed
    
    print(f"\nTotal Tests: {total}")
    print(f"Passed: {passed} ✅")
    print(f"Failed: {failed} ❌")
    print(f"Success Rate: {(passed/total*100):.1f}%")
    
    if failed_tests:
        print("\n" + "="*80)
        print("FAILED TESTS DETAILS")
        print("="*80)
        for test in failed_tests:
            print(f"\n❌ {test['name']}")
            print(f"   {test['details']}")
    
    print("\n" + "="*80)
    
    return failed == 0

def main():
    """Main test execution"""
    print("\n" + "="*80)
    print("EXAMS MADE EASY - BACKEND API TESTING")
    print("Testing Authentication & Admin Endpoints")
    print("="*80)
    print(f"Base URL: {BASE_URL}")
    print(f"Database: {DB_NAME}")
    print("="*80)
    
    # Seed test data
    if not seed_test_data():
        print("Failed to seed test data. Exiting.")
        sys.exit(1)
    
    try:
        # Authentication tests
        print("\n" + "="*80)
        print("AUTHENTICATION TESTS")
        print("="*80)
        test_auth_me_owner()
        test_auth_me_normal()
        test_auth_me_no_token()
        test_update_phone()
        
        # Admin tests
        print("\n" + "="*80)
        print("ADMIN ENDPOINT TESTS")
        print("="*80)
        test_admin_users_owner()
        test_admin_users_normal()
        test_admin_users_no_token()
        test_set_access_owner()
        test_set_access_normal()
        
        # Logout test (must be after other owner token tests)
        print("\n" + "="*80)
        print("LOGOUT TEST")
        print("="*80)
        test_logout()
        
        # Session endpoint test
        print("\n" + "="*80)
        print("SESSION ENDPOINT TEST")
        print("="*80)
        test_auth_session_missing_header()
        
        # Regression tests
        test_regression_endpoints()
        
        # Print summary
        all_passed = print_summary()
        
    finally:
        # Always cleanup
        cleanup_test_data()
    
    # Exit with appropriate code
    sys.exit(0 if all_passed else 1)

if __name__ == "__main__":
    main()
