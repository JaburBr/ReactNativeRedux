const initialState = [
  'Fazer cafe',
  'Estudar native',
];

export default function todos(state = initialState, action) {

  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.text];
    default:
      return state;
  };

}
