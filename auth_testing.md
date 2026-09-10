# Auth-Gated App Testing Playbook (Emergent Google Auth)

## Step 1: Create Test User & Session
```
mongosh --eval "
use('test_database');
var userId = 'test-user-' + Date.now();
var sessionToken = 'test_session_' + Date.now();
db.users.insertOne({
  user_id: userId,
  email: 'test.user.' + Date.now() + '@example.com',
  name: 'Test User',
  picture: 'https://via.placeholder.com/150',
  phone: '+91 9999999999',
  access: false,
  is_owner: false,
  created_at: new Date().toISOString()
});
db.user_sessions.insertOne({
  user_id: userId,
  session_token: sessionToken,
  expires_at: new Date(Date.now() + 7*24*60*60*1000),
  created_at: new Date()
});
print('Session token: ' + sessionToken);
print('User ID: ' + userId);
"
```

Owner account: yxhcvcjjc@gmail.com (only this email can open /admin and toggle access).

## Step 2: Backend API
- GET /api/auth/me  (Authorization: Bearer <token> OR session_token cookie)
- POST /api/auth/session  (header X-Session-ID)
- POST /api/auth/logout
- POST /api/user/phone  {"phone": "+91..."}
- GET /api/admin/users  (owner only)
- PATCH /api/admin/users/{user_id}/access  {"access": true}

## Step 3: Browser Testing
```
await page.context.add_cookies([{ "name":"session_token","value":"<TOKEN>","domain":"<host>","path":"/","httpOnly":true,"secure":true,"sameSite":"None" }])
```

## Checklist
- users have user_id (custom), _id excluded via projection
- session user_id matches user.user_id
- /api/auth/me returns user
- owner-only endpoints 403 for non-owner
- access ON hides all locks + free cards; OFF keeps locks
