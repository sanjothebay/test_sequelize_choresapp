INSERT INTO choresTodoList (chore_name,createdAt,updatedAt) VALUE ("Wash Dishes",now(),now());
INSERT INTO choresTodoList (chore_name,createdAt,updatedAt) VALUE ("Clean the attic",now(),now());
INSERT INTO choresTodoList (chore_name,createdAt,updatedAt, chore_done) VALUE ("Wash the Car",now(),now(), true);
INSERT INTO choresTodoList (chore_name,createdAt,updatedAt, chore_done) VALUE ("Mopp the Floor",now(),now(), true);

SELECT * FROM choresTodoList