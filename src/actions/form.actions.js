import * as formConst from "./form.const";

export const initIitem = () => ({
  type: formConst.INIT_ITEM
});
export const addItem = item => ({
  type: formConst.ADD_ITEM,
  item
});
export const editItem = (key, item) => ({
  type: formConst.EDIT_ITEM,
  key,
  item
});
export const deleteItem = key => ({
  type: formConst.DELETE_ITEM,
  key
});
