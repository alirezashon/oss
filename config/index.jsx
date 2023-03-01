const development = proccess.env.NODE_ENV ==='production'

export const server = development ? 'http://localhost:3000' : 'http:/dashboard.net'