-- Seed operators table from existing static data
-- Run this in the Supabase SQL Editor after creating the tables

insert into operators (slug, name, description, services, locations, phone, email, website, image, rating, review_count)
values
  ('elliott-storage', 'Elliott Storage', 'Elliott Storage offers container storage and self-storage units across multiple Isle of Man locations including Ballasalla, Braddan, Crosby, Douglas, Foxdale and Jurby.', '{"container storage","self-storage"}', '{"Ballasalla","Braddan","Crosby","Douglas","Foxdale","Jurby"}', null, null, 'https://elliottstorage.im/', null, null, null),
  ('containermann', 'Containermann', 'Containermann specialises in 20ft container storage with upper and lower level unit options for secure, flexible storage.', '{"container storage"}', '{"Isle of Man"}', null, null, 'https://containermann.com/', null, null, null),
  ('manx-self-storage', 'Manx Self Storage', 'Manx Self Storage provides clean, secure self-storage units in Douglas, Isle of Man, with a range of unit sizes to suit personal and business needs.', '{"self-storage"}', '{"Douglas"}', null, null, 'https://selfstorage.co.im/', null, null, null),
  ('big-red-self-storage', 'Big Red Self Storage', 'Big Red Self Storage operates facilities in Ronaldsway/Ballasalla and Tromode/Douglas, offering accessible self-storage for residents and businesses.', '{"self-storage"}', '{"Ronaldsway","Ballasalla","Tromode","Douglas"}', null, null, 'https://www.bigred.im/', null, null, null),
  ('storemann', 'Storemann', 'Storemann provides self-storage solutions in Peel, Isle of Man, with competitively priced units ranging from small to large sizes.', '{"self-storage"}', '{"Peel"}', null, null, 'https://www.storemann.com/', null, null, null),
  ('callister-removals-self-storage', 'Callister Removals Self Storage', 'Callister Removals offers self-storage and removals storage services, ideal for house moves, decluttering and temporary storage needs.', '{"self-storage","removals storage"}', '{"Isle of Man"}', null, null, 'https://www.callisterremovals.co.im/storageservices/self-storage', null, null, null),
  ('corkill-removals-storage', 'Corkill Removals & Storage', 'Corkill Removals & Storage provides household and removals storage for Isle of Man residents, with experience in secure handling and storage.', '{"removals storage","household storage"}', '{"Isle of Man"}', null, null, 'https://www.corkillremovals.com/storage.html', null, null, null),
  ('corkill-datasafe', 'Corkill Datasafe', 'Corkill Datasafe offers secure document and archive storage for businesses needing compliant records management on the Isle of Man.', '{"document storage","archive storage"}', '{"Isle of Man"}', null, null, 'https://www.datasafe.co.im/', null, null, null),
  ('hitchens-removals-storage', 'Hitchens Removals & Storage', 'Hitchens Removals & Storage offers removals storage and container storage options, with flexible daily rates for short and long term needs.', '{"removals storage","storage containers"}', '{"Isle of Man"}', null, null, 'https://www.hitchensremovals.com/page_337095.html', null, null, null),
  ('mann-crane-hire', 'Mann Crane Hire', 'Mann Crane Hire provides secure self-storage, site accommodation and container-style units, serving construction, trade and personal storage needs.', '{"secure self-storage","site accommodation","container-style units"}', '{"Isle of Man"}', null, null, 'https://www.manncranehire.im/services/', null, null, null),
  ('easymix-storage-solutions', 'EasyMix Storage Solutions', 'EasyMix Storage Solutions offers self-storage options for personal and business use on the Isle of Man.', '{"self-storage"}', '{"Isle of Man"}', null, null, 'https://www.easymix.im/storage-solutions/', null, null, null);

-- Seed prices table from existing static data
insert into prices (operator_slug, size_label, price, period, location, notes)
values
  -- Elliott Storage
  ('elliott-storage', '26 sq ft', 75, 'pcm', 'Ballasalla', null),
  ('elliott-storage', '52 sq ft', 90, 'pcm', 'Ballasalla', null),
  ('elliott-storage', '80 sq ft', 105, 'pcm', 'Ballasalla', null),
  ('elliott-storage', '160 sq ft', 151, 'pcm', 'Ballasalla', null),
  ('elliott-storage', '160 sq ft upper floor', 136, 'pcm', 'Braddan', 'Upper floor unit'),
  ('elliott-storage', '160 sq ft ground floor', 151, 'pcm', 'Braddan', 'Ground floor unit'),
  ('elliott-storage', '26 sq ft', 75, 'pcm', 'Douglas', null),
  ('elliott-storage', '52 sq ft', 90, 'pcm', 'Douglas', null),
  ('elliott-storage', '80 sq ft upper floor', 98, 'pcm', 'Douglas', 'Upper floor unit'),
  ('elliott-storage', '80 sq ft ground floor', 105, 'pcm', 'Douglas', 'Ground floor unit'),
  ('elliott-storage', '160 sq ft upper floor', 136, 'pcm', 'Douglas', 'Upper floor unit'),
  ('elliott-storage', '160 sq ft ground floor', 151, 'pcm', 'Douglas', 'Ground floor unit'),
  ('elliott-storage', '66 sq ft', 94, 'pcm', 'Foxdale', null),
  ('elliott-storage', '160 sq ft', 123, 'pcm', 'Foxdale', null),
  ('elliott-storage', '80 sq ft upper floor', 94, 'pcm', 'Jurby', 'Upper floor unit'),
  ('elliott-storage', '80 sq ft ground floor', 98, 'pcm', 'Jurby', 'Ground floor unit'),
  ('elliott-storage', '160 sq ft upper floor', 123, 'pcm', 'Jurby', 'Upper floor unit'),
  ('elliott-storage', '160 sq ft ground floor', 136, 'pcm', 'Jurby', 'Ground floor unit'),
  ('elliott-storage', '80 sq ft', 115, 'pcm', 'Crosby', null),
  ('elliott-storage', '160 sq ft upper floor', 110, 'pcm', 'Crosby', 'Upper floor unit'),
  ('elliott-storage', '160 sq ft ground floor', 123, 'pcm', 'Crosby', 'Ground floor unit'),
  ('elliott-storage', '320 sq ft', 220, 'pcm', 'Crosby', null),
  -- Containermann
  ('containermann', '20ft container upper-level unit', 78, 'per month', 'Isle of Man', 'Upper-level unit'),
  ('containermann', '20ft container lower-level unit', 120, 'per month', 'Isle of Man', 'Lower-level unit'),
  -- Manx Self Storage
  ('manx-self-storage', '2m x 2m', 25, 'per week', 'Douglas', null),
  ('manx-self-storage', '2m x 3m', 30, 'per week', 'Douglas', null),
  ('manx-self-storage', '2m x 4m', 35, 'per week', 'Douglas', null),
  ('manx-self-storage', '3m x 4m', 50, 'per week', 'Douglas', null),
  -- Storemann
  ('storemann', '2m x 2m x 2m', 25, 'per week', 'Peel', null),
  ('storemann', '2m x 3m x 2m', 32.5, 'per week', 'Peel', null),
  ('storemann', '2m x 4m x 2m', 37.5, 'per week', 'Peel', null),
  ('storemann', '2m x 5m x 2m', 42.5, 'per week', 'Peel', null),
  ('storemann', '3m x 4m x 2m', 47.5, 'per week', 'Peel', null),
  ('storemann', '3m x 5m x 2m', 52.5, 'per week', 'Peel', null),
  ('storemann', '7m x 2.5m x 2m', 57.5, 'per week', 'Peel', null),
  ('storemann', '7m x 5m x 2m', 72.5, 'per week', 'Peel', null),
  -- Callister Removals
  ('callister-removals-self-storage', '25 sq ft', 12, 'per week', 'Isle of Man', 'From £12 per week'),
  ('callister-removals-self-storage', '50 sq ft', 22, 'per week', 'Isle of Man', 'From £22 per week'),
  ('callister-removals-self-storage', '75 sq ft', 32, 'per week', 'Isle of Man', 'From £32 per week'),
  ('callister-removals-self-storage', '100 sq ft', 42, 'per week', 'Isle of Man', 'From £42 per week'),
  ('callister-removals-self-storage', '150 sq ft', 65, 'per week', 'Isle of Man', 'From £65 per week'),
  -- Hitchens
  ('hitchens-removals-storage', 'Flexible', 1, 'per day', 'Isle of Man', 'From £1 per day + VAT. Unit size not specified.');
