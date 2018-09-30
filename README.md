# The Noted Project

## Contentful
Create a '.env' file with the values:
```
CONTENTFUL_SPACE_ID=your-space-id
CONTENTFUL_ACCESS_TOKEN=your-access-token
```

## Publish
For surge, use `gatsby build` and then `surge public/`. 
The `master` branch will automatically publish to netlify.

## Developing
``` bash
gatsby develop
```
Runs on port 8000 by default.
