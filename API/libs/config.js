module.exports = {
	database: "main",
	username: "",
	password: "",
	params: {
		host: 'localhost',
		dialect: 'sqlite3',
		//storage: "path/to/database.sqlite",
		storage: "db_projeto.sqlite3",
		define: {
			underscored: true
		}
	},
	jwtSecret: "p@ssw0rd",
	jwrSession: {session: false}
};	