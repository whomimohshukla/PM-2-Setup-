# PM2 Setup for MERN Project

This guide explains how to use **PM2** to run your MERN backend in production, keep it alive, and manage it easily.

---

## 1. Install PM2 Globally

```bash
npm install -g pm2
```

---

## 2. Start Your MERN Backend with PM2

Navigate to your backend folder and start the server with PM2:

```bash
pm2 start server.js --name "mern-backend"
```

If your entry file is in a subfolder, adjust accordingly:

```bash
pm2 start backend/index.js --name "mern-backend"
```

---

## 3. Use Environment Variables

Set environments when starting your app:

```bash
pm2 start server.js --name "mern-backend" --env production
```

Or add `--watch` for development auto-restart:

```bash
pm2 start server.js --watch
```

---

## 4. Manage the App

Common commands:

```bash
pm2 list               # Show all apps
pm2 restart mern-backend   # Restart
pm2 stop mern-backend      # Stop
pm2 delete mern-backend    # Remove
pm2 logs mern-backend      # Show logs
pm2 monit                  # Monitor live
```

---

## 5. Keep PM2 Running After Reboot

Enable startup script:

```bash
pm2 startup
```

Follow the instructions printed.

Then save running processes:

```bash
pm2 save
```

---

## 6. Use Ecosystem Config File

Create a file `ecosystem.config.js`:

```javascript
module.exports = {
	apps: [
		{
			name: "mern-backend",
			script: "./server.js",
			instances: "max",
			exec_mode: "cluster",
			watch: false,
			env: { NODE_ENV: "development" },
			env_production: { NODE_ENV: "production" },
		},
	],
};
```

Start with:

```bash
pm2 start ecosystem.config.js --env production
```

---

## 7. React Frontend in Production

1. Build the frontend:

```bash
cd client && npm run build
```

2. Serve from Express using `express.static` **OR** deploy separately using Nginx/CDN.

---
