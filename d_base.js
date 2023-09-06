let games = [
    {id: '1', titulo: 'Zelda, Lágrimas do Rei', plataforma: ['Switch']},
    {id: '2', titulo: 'Final Fantasy 7 Remake', plataforma: ['PS5', 'Xbox']},
    {id: '3', titulo: 'Senhor do Aneis', plataforma: ['PS5', 'Xbox', 'PC']},
    {id: '4', titulo: 'Mario Kart', plataforma: ['Switch']},
    {id: '5', titulo: 'Pokemon Scarlet', plataforma: ['PS5', 'Xbox', 'PC']},
  ]
  
  let autores = [
    {id: '1', nome: 'mario', verificado: true},
    {id: '2', nome: 'yoshi', verificado: false},
    {id: '3', nome: 'peach', verificado: true},
  ]
  
  let analises = [
    {id: '1', avaliacao: 9, conteudo: 'lorem ipsum', autor_id: '1', game_id: '2'},
    {id: '2', avaliacao: 10, conteudo: 'lorem ipsum', autor_id: '2', game_id: '1'},
    {id: '3', avaliacao: 7, conteudo: 'lorem ipsum', autor_id: '3', game_id: '3'},
    {id: '4', avaliacao: 5, conteudo: 'lorem ipsum', autor_id: '2', game_id: '4'},
    {id: '5', avaliacao: 8, conteudo: 'lorem ipsum', autor_id: '2', game_id: '5'},
    {id: '6', avaliacao: 7, conteudo: 'lorem ipsum', autor_id: '1', game_id: '2'},
    {id: '7', avaliacao: 10, conteudo: 'lorem ipsum', autor_id: '3', game_id: '1'},
  ]
  
  export default { games, autores, analises }