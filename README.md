Instagram
=========

Hud widget with latest Instagram image tagged with ClockCulture


Use this curl command to authorise a new user

curl -F 'client_id=ca4abdafa0444f71a5a7cb17da3fe524' -F 'grant_type=authorization_code' -F 'redirect_uri=http://clock.co.uk' -F 'code=<<USER_AUTH_CODE>>' -F 'client_secret=<<CLIENT_SECRET>>' https://api.instagram.com/oauth/access_token