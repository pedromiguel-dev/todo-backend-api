# Todo simple api
A nodejs express prisma backend that serves a JSON REST API and a html static file for managing a simple todo backend :>

### initializing
clone it or download it whaterver then.
1. npm install
2. Set your DATABASE_URL creating yout own .env file, as the exemple in the project.
3. npx prisma migrate dev --name init
4. npx prisma generate
5. npm run dev
6. It should open on 8081 and changing it may break the statics urls on the ejs files on view, so change the ports there as well :>.

Made this for fun as a side project for studing backend and to experiment with HTMX
