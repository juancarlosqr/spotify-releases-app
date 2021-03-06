import { URLSearchParams } from 'url';
import querystring from 'querystring';

import {
  SPOTIFY_CLIENT_ID,
  SPOTIFY_REDIRECT_URI,
  SPOTIFY_CLIENT_SECRET,
} from '../../config/spotify';

export default async (req, res) => {
  const { code, error } = req.query;

  if (error) {
    res.redirect('/');
    return;
  }

  const body = new URLSearchParams();
  body.append('code', code);
  body.append('redirect_uri', SPOTIFY_REDIRECT_URI);
  body.append('grant_type', 'authorization_code');

  const basicAuthToken = Buffer.from(
    SPOTIFY_CLIENT_ID + ':' + SPOTIFY_CLIENT_SECRET
  ).toString('base64');

  const tokenApiOptions = {
    body,
    headers: {
      Authorization: `Basic ${basicAuthToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  };

  try {
    const response = await fetch(
      'https://accounts.spotify.com/api/token',
      tokenApiOptions
    );
    const data = await response.json();
    res.redirect('/releases?' + querystring.stringify(data));
  } catch (error) {
    res.statusCode = 500;
    res.json({ error });
  }
};
