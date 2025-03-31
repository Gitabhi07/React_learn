# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Some Notes for me:-
Redux and React-Redux are two different things redux is core libraries and react-redux using that with bridge or wireing in btw react and redux to manage the state in react project but when we use redux-toolkit which is optimize version of redux which do aal the neccesary work behind as not done by redux in older version .. as during learning react we listen the line -> "never mutated your state" so, reduxtoolkit done this work alredy so we don't have to write it mannually .
In reduxtoolkit state is already prevserved..

Starter..
1- start with store files and usually it is single Sourec of truth-one..

2- configureStore need to configure storef files

3- introduce reducer which i have done in my project during learning redux it is in the new folder called features/todo. we call it anything .. like todoSlice in redux docs..follow name_configuration then, CreateSlice import in that filesname todoSlice above. We use nanoid() method to create new id with refrence todos items .

To make slice ther is alredy some feture that we have to follow:- name, initialState and reducer as object and in the reducer there is function with paramenter as the (state, action)
