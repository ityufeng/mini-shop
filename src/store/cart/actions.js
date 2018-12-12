// actions
export default {
  plus(ctx,id){
    ctx.commit('plus',id)
  },
  minus(ctx,id){
    ctx.commit('minus',id)
  },
  addGoods(ctx,data){
    ctx.commit('addGoods',data)
  },
  deleteGoods(ctx,id){
    ctx.commit('deleteGoods',id)
  }
}
