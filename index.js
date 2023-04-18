//1.MYMOVIE
	CREATE DATABASE mymovie //for creating table

	INSERT INTO `mymovie` (`id`, `movie_name`, `language`, `cast`, `director`, `producer`, `music_director`) VALUES 
	('3', 'Ala vaikundapuramlo', 'Telugu', 'Allu arjun, Pooja Hegde, Jeyaram, Tabu, Kasthuri', 'Trivikram', 
	'14 reels', 'Thaman');  //insert to mymovies

	UPDATE `mymovie` SET `cast` ='Kamal, Pasupathi, Abirami, Balasingh,Nepoliyan,gandhimadhi' 
	WHERE `mymovie`.`id`=2; //for update

	ALTER TABLE `mymovie` CHANGE `id` `id` INT NOT NULL AUTO_INCREMENT; //alter table

//2.User Table
	INSERT INTO `users` (`id`, `User Name`, `Profile Picture`, `Role`, `Favourite Genre`, `Favourite Actor`,
	 `DOB`, `Contact`, `Mail Id`, `Gender`) VALUES ('1', 'Cheems', 'https://indianmemetemplates.com/doge-meme-templates/',
	 'admin', 'action,fantasy', 'Vijay', '2014-04-09', '+915845896555', 'cheems@gmail.com', 'male'), 
	('2', 'Perro', 'https://static.wikia.nocookie.net/joke-battles/images/a/a0/Quieres.png/revision/latest?cb=20200321004730',
	 'admin 2', 'drama,thriller', 'Mansoor ali khan', '2014-04-07', '+915848456', 'perro@gmail.com', 'female');//add data

	ALTER TABLE `review` ADD `Movie Name` VARCHAR(50) NOT NULL AFTER `Name`;// alter table

//3.Rating 
	INSERT INTO `review` (`id`, `Name`, `Movie Name`, `Rating`, `Review`) VALUES ('1', 'Maran', 'Ponniyin Selvan 1', '2', 'flop'), 
	('2', 'Karthick Krishna', 'Vikram', '4', 'very good');

//4.Actor Skills
	SELECT * FROM `actor skills

//5.Multiverse Movies
	INSERT INTO `multiverse movies` (`id`, `Name`, `Rolls`, `Movie Name`, `Director`) VALUES ('1', 'Vijay', 'Vetri, Maran, Thalapthy', 'Mersal', 'Atlee'),
	 ('2', 'Tom Halland', 'Spider Man, Peter Parker', 'Spider Man:No way Home', 'John Watts');