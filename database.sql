-- UNISGU Database Schema
-- PostgreSQL Syntax (Compatible with Supabase)
-- Version 2.0

-- ----------------------------
-- Section 1: User Management & Authentication
-- ----------------------------

-- Users Table: Stores user information, roles, and credentials.
CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(255),
    avatar_url TEXT,
    role VARCHAR(50) NOT NULL DEFAULT 'user', -- e.g., 'user', 'admin', 'premium_member'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE users IS 'Stores user accounts and profile information.';
COMMENT ON COLUMN users.role IS 'Defines user permissions (e.g., user, admin, premium_member).';

-- ----------------------------
-- Section 2: Memberships & Services
-- ----------------------------

-- Memberships Table: Defines the available premium membership plans.
CREATE TABLE memberships (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price_per_month NUMERIC(10, 2) NOT NULL,
    duration_months INT NOT NULL,
    total_price NUMERIC(10, 2) NOT NULL,
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE memberships IS 'Defines the premium membership packages.';

-- User Memberships Table: Links users to their active or past membership plans.
CREATE TABLE user_memberships (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    membership_id INT NOT NULL REFERENCES memberships(id) ON DELETE RESTRICT,
    start_date TIMESTAMPTZ NOT NULL,
    end_date TIMESTAMPTZ NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'active', -- 'active', 'expired', 'cancelled'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE user_memberships IS 'Tracks which users have subscribed to which memberships.';

-- Services Table: Defines the professional services offered by the community.
CREATE TABLE services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price_range VARCHAR(255),
    duration VARCHAR(100),
    is_popular BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE services IS 'Lists all professional services offered.';

-- ----------------------------
-- Section 3: Orders & Projects
-- ----------------------------

-- Projects Table: Manages the lifecycle of ordered professional services.
CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    service_id INT NOT NULL REFERENCES services(id) ON DELETE RESTRICT,
    name VARCHAR(255) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'pending', -- 'pending', 'in_progress', 'reviewing', 'completed', 'cancelled'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE projects IS 'Tracks the status of professional services ordered by users.';

-- ----------------------------
-- Section 4: Learning Management System (LMS)
-- ----------------------------

-- Learning Paths Table: Defines high-level learning tracks (e.g., Fullstack Web).
CREATE TABLE learning_paths (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    category VARCHAR(100), -- 'teknologi' or 'bahasa'
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE learning_paths IS 'Defines the main learning programs, like Fullstack Web Dev.';

-- Modules Table: Groups lessons into modules within a learning path.
CREATE TABLE modules (
    id SERIAL PRIMARY KEY,
    learning_path_id INT NOT NULL REFERENCES learning_paths(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    module_order INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE modules IS 'A collection of lessons within a learning path.';

-- Lessons Table: Stores individual lesson content.
CREATE TABLE lessons (
    id SERIAL PRIMARY KEY,
    module_id INT NOT NULL REFERENCES modules(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    video_url TEXT,
    video_link TEXT,
    channel VARCHAR(100),
    duration VARCHAR(50),
    level VARCHAR(50), -- 'fundamental', 'intermediate', 'advanced'
    lesson_order INT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE lessons IS 'Individual learning units with video and text content.';
COMMENT ON COLUMN lessons.level IS 'Used for language courses to define difficulty.';

-- User Progress Table: Tracks a user's completion status for each lesson.
CREATE TABLE user_progress (
    id SERIAL PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    lesson_id INT NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
    status VARCHAR(50) NOT NULL DEFAULT 'not_started', -- 'not_started', 'in_progress', 'completed'
    completed_at TIMESTAMPTZ,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    UNIQUE(user_id, lesson_id)
);

COMMENT ON TABLE user_progress IS 'Tracks which lessons a user has completed.';

-- ----------------------------
-- Section 5: Website Content
-- ----------------------------

-- Contacts Table: Stores messages submitted through the contact form.
CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    phone_number VARCHAR(20),
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

COMMENT ON TABLE contacts IS 'Stores submissions from the website contact form.';


-- ----------------------------
-- Section 6: Initial Data Seeding
-- ----------------------------

-- Insert Default Users
-- IMPORTANT: Replace 'hashed_password_placeholder' with a securely hashed password.
INSERT INTO users (email, password_hash, full_name, role) VALUES
('admin@gmail.com', 'hashed_password_placeholder_for_admin', 'Admin User', 'admin'),
('user@user.com', 'hashed_password_placeholder_for_user', 'Budi Santoso', 'premium_member');

-- Insert Services
INSERT INTO services (title, description, price_range, duration, is_popular) VALUES
('Pengembangan Website', 'Pembuatan website profesional untuk bisnis, UMKM, institusi, dan lembaga dengan teknologi modern, cepat, dan aman.', 'Rp 3.000.000 - Rp 15.000.000', '2-8 minggu', true),
('Instalasi Open Journal Systems (OJS)', 'Layanan instalasi, konfigurasi, dan maintenance OJS untuk penerbitan jurnal ilmiah Anda secara profesional.', 'Rp 1.500.000 - Rp 5.000.000', '1-2 minggu', false),
('Manajemen Server & VPS', 'Instalasi dan optimasi VPS, termasuk setup aaPanel, Nginx, dan konfigurasi keamanan untuk performa maksimal.', 'Rp 500.000 - Rp 2.000.000/bulan', 'Ongoing', false),
('Pendampingan Publikasi Ilmiah', 'Bantuan publikasi dari submit hingga terbit di SINTA (1-6) dan Scopus (Q2 & Q3), termasuk formatting dan proofreading.', 'Rp 4.000.000 - Rp 12.000.000', '3-8 bulan', false),
('Jasa Penulisan Buku', 'Kami membantu penulisan dan penerbitan buku ajar, buku referensi, dan monograf, lengkap dengan ISBN dan desain cover.', 'Rp 7.000.000 - Rp 20.000.000', '2-6 bulan', false),
('Konsultasi Teknologi', 'Butuh saran ahli untuk proyek digital Anda? Tim kami siap membantu Anda menemukan solusi teknologi yang tepat.', 'Rp 400.000 - Rp 1.000.000/jam', 'Flexible', false);

-- Insert Memberships
INSERT INTO memberships (name, description, price_per_month, duration_months, total_price, is_popular) VALUES
('Paket Bulanan', 'Fleksibel, cocok untuk mencoba.', 2500000, 1, 2500000, false),
('Paket 3 Bulan', 'Kombinasi terbaik untuk hasil optimal.', 1800000, 3, 5400000, true),
('Paket 6 Bulan', 'Komitmen penuh untuk transformasi karir.', 1500000, 6, 9000000, false);

-- Insert Learning Paths
INSERT INTO learning_paths (title, description, category) VALUES
('Fullstack Web Development', 'Pembelajaran komprehensif pengembangan web dari frontend hingga backend', 'teknologi'),
('Mobile Development', 'Pengembangan aplikasi mobile dengan React Native dan Flutter', 'teknologi'),
('Bahasa Inggris', 'Pembelajaran bahasa Inggris dari dasar hingga mahir', 'bahasa'),
('Bahasa Mandarin', 'Pembelajaran bahasa Mandarin dari dasar hingga mahir', 'bahasa'),
('Bahasa Persia (Farsi)', 'Pembelajaran bahasa Persia dari dasar hingga mahir', 'bahasa');

-- Insert Modules for Web Dev Path
WITH web_path AS (SELECT id FROM learning_paths WHERE title = 'Fullstack Web Development')
INSERT INTO modules (learning_path_id, title, module_order) VALUES
((SELECT id FROM web_path), 'Dasar Web (HTML, CSS, JS)', 1),
((SELECT id FROM web_path), 'Frontend dengan React.js', 2),
((SELECT id FROM web_path), 'Backend dengan Node.js & Express', 3);

-- Insert Lessons for Web Dev Module 1
WITH web_module1 AS (SELECT id FROM modules WHERE title = 'Dasar Web (HTML, CSS, JS)')
INSERT INTO lessons (module_id, title, video_url, video_link, channel, duration, lesson_order) VALUES
(web_module1, 'HTML & CSS Dasar', 'https://www.youtube.com/embed/mU6anWqZJcc', 'https://www.youtube.com/watch?v=mU6anWqZJcc', 'freeCodeCamp', '11:08:03', 1),
(web_module1, 'JavaScript Lengkap untuk Pemula', 'https://www.youtube.com/embed/PkZNo7MFNFg', 'https://www.youtube.com/watch?v=PkZNo7MFNFg', 'freeCodeCamp', '3:26:42', 2);

-- Insert Lessons for English Path
WITH eng_path AS (SELECT id FROM learning_paths WHERE title = 'Bahasa Inggris')
INSERT INTO modules (learning_path_id, title, module_order) VALUES
((SELECT id FROM eng_path), 'Fundamental English', 1),
((SELECT id FROM eng_path), 'Intermediate English', 2),
((SELECT id FROM eng_path), 'Advanced English', 3);

WITH eng_module1 AS (SELECT id FROM modules WHERE title = 'Fundamental English')
INSERT INTO lessons (module_id, title, video_url, video_link, channel, duration, level, lesson_order) VALUES
(eng_module1, 'English Grammar Basics', 'https://www.youtube.com/embed/YgBBLkLUcTI', 'https://www.youtube.com/watch?v=YgBBLkLUcTI', 'Learn English with Emma', '45:30', 'fundamental', 1),
(eng_module1, 'Basic English Conversation', 'https://www.youtube.com/embed/sQEr4tEOg7k', 'https://www.youtube.com/watch?v=sQEr4tEOg7k', 'English with Lucy', '1:02:15', 'fundamental', 2);

-- End of Schema
