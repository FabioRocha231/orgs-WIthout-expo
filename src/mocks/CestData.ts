import logo from '../../assets/logo.png';
import tomate from '../../assets/Tomate.png';
import brocolis from '../../assets/Brócolis.png';
import batata from '../../assets/Batata.png';
import pepino from '../../assets/Pepino.png';
import abobora from '../../assets/Abóbora.png';

export const CestData = {
  topComponent: {
    textContent: 'Detalhes da cesta',
  },
  farmCest: {
    cestName: 'Cesta de Verduras',
    farmName: 'Jenny Jack Farm',
    farmDescription:
      'Uma cesta com produtos selecionados cuidadosamente da fazenda para sua cozinha',
    farmLogo: logo,
    price: 'R$ 40,00',
    button: 'Comprar',
  },
  itens: {
    title: 'Itens da cesta',
    list: [
      {
        name: 'Tomate',
        image: tomate,
      },
      {
        name: 'Brócolis',
        image: brocolis,
      },
      {
        name: 'Batata',
        image: batata,
      },
      {
        name: 'Pepino',
        image: pepino,
      },
      {
        name: 'Abóbora',
        image: abobora,
      },
    ],
  },
};
