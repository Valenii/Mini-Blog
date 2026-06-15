-- Limpiar datos existentes
TRUNCATE TABLE posts RESTART IDENTITY CASCADE;
TRUNCATE TABLE authors RESTART IDENTITY CASCADE;

-- Insertar autores de ejemplo
INSERT INTO authors (name, email, bio) VALUES
  ('Ana García', 'ana@email.com', 'Escritora y desarrolladora web'),
  ('Carlos López', 'carlos@email.com', 'Blogger de tecnología'),
  ('María Fernández', 'maria@email.com', 'Periodista digital');

-- Insertar posts de ejemplo
INSERT INTO posts (author_id, title, content, published) VALUES
  (1, 'Mi primer post', 'Este es el contenido de mi primer post en MiniBlog.', true),
  (1, 'Aprendiendo Node.js', 'Node.js es una herramienta increíble para el backend.', true),
  (2, 'Guía de PostgreSQL', 'PostgreSQL es una base de datos muy poderosa y confiable.', true),
  (2, 'Express en 10 minutos', 'Con Express podés crear una API en muy poco tiempo.', false),
  (3, 'El futuro del periodismo', 'El periodismo digital está cambiando la forma de informar.', true);