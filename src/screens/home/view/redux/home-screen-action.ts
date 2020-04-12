import {HomeScreenProps} from "../model/home-screen-props";

export enum HomeScreenActionConst {
  FETCH_SUBJECT = "HomeScreenActionConst@FETCH_SUBJECT",
  LOADING_SUBJECT = "HomeScreenActionConst@LOADING_SUBJECT",
  RECEIVE_SUBJECT = "HomeScreenActionConst@RECEIVE_SUBJECT",
}

export interface HomeScreenActionType {
  type?: HomeScreenActionConst;
  payload?: HomeScreenProps;
}

export class HomeScreenAction {
  static getSubjects = (/*raCpf: string, date: MomentController*/) => dispatch => {
    dispatch({type: HomeScreenActionConst.LOADING_SUBJECT});
    // PokedexService.pegarTodosPokemons(request => {
    //
    //   dispatch({
    //     type: FETCH_SUBJECT.LISTA_POKEMON_CARREGADO,
    //   })
    //
    // }, () => {
    //
    //   dispatch({
    //     type: ListaPokemonsConst.LISTA_POKEMON_ERRO_CARREGAR,
    //   })
    //
    // });
  };
}
