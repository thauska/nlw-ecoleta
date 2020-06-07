import knex from 'knex';
import path from 'path'; // responsável por padronizar caminhos de arquivos

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true
});

export default connection;

// Migration = Histórico do BD