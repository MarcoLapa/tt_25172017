EXERCÍCIO 
1) Crie uma pasta com o nome "exercicio" e crie um repositório git nesta pasta
mkdir exercicio && cd exercicio && git init

2) Crie um arquivo teste.txt e adicione-o ao index
touch teste.txt && git add teste.txt

3) verifique o status do projeto
git status

4) adicione o arquivo ao index
git add teste.txt

5) Verifique o status do projeto
git status

6) Realize o commit
 git commit -m "Primeiro commit"

7) Altere o arquivo teste.txt colocando o texto "Exercicio" como conteúdo.
 echo Exercicio > teste.txt

8) Verifique o status do projeto
git status

9) Faça um diff
git diff

10) Adicione ao index
git add teste.txt

11) Veja novamente o diff e também o diff -cached
git diff
git diff --cached

12) Realize o commit e veja o log -- mensagem 'arquivo alterado'
git commit -am "Altera conteúdo de exercicio"

13) compare os 2 commits do log
git diff cd0d7d2967c9e527e507073c8ca4c001c10eac25 f36cfb8b17489e1be5bb2c81bee6d581d827f825

14) remova o arquivo teste.txt do controle de versão
rm teste.txt
git commit -a -m "Limpa exercício"

15) Verifique o status do projeto
git status
