module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'bb534421449b35778ca7e6ebec58a8b1'),
    },
  },
  public: '../home/myriam/dev/Project-thomas/FORMATION/THOMAS/todolist/my-project/build/index.html', // Remplacez par le chemin réel
});
