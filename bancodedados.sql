create database fbmovies;
 
use fbmovies;
 
create table login(
id_usuario int not null auto_increment primary key,
usuario varchar (30) not null unique,
senha varchar (18) not null,
email varchar (60) not null
);
 
create table filme(
id_filme int not null auto_increment primary key,
titulo varchar (45),
ano_lancamento date,
diretor varchar (45),
genero varchar (30)
);

create table comentario(
id_comentario int not null auto_increment primary key,
opniao_usuario varchar (150) not null,
avaliacao_usuario int (1) not null 
);

alter table comentario add column id_usuario int not null , add CONSTRAINT fk_usuario
FOREIGN KEY (id_usuario) REFERENCES login (id_usuario);

alter table comentario add column id_filme int not null , add CONSTRAINT fk_filme
FOREIGN KEY (id_filme) REFERENCES filme (id_filme);

select * from comentario;