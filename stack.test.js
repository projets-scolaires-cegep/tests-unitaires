
const st=require('./stack.js');
test('count-retourne-0-si-pile-vide',()=>{
    //arrange
    const stack=new st.Stack();
    //act
    const compte=stack.count();
    //assert
    expect(compte).toEqual(0);
});
//
test('push(valeur)-suivi-de-peek-retourne-valeur',()=>{
    const stack=new st.Stack();
    stack.push(1);
    stack.peek();
    expect(stack.peek()).toEqual(1);
});
//
test('isEmpty-nouvelle-pile-retourne true',()=>{
    const stack=new st.Stack();
    const state=stack.isEmpty();
    expect(state).toBeTruthy();
});
//
test('isEmpty-retourne-false-apres-push',()=>{
    const stack=new st.Stack();
    stack.push(1);
    const state=stack.isEmpty(); 
    expect(state).toBeFalsy();
});
//
test('count-apres-push-retourne-1deplus-que count-initial',()=>{
    const stack=new st.Stack();
    const initial=stack.count();
    stack.push(1);
    const second=stack.count();
    expect(second).toEqual(initial+1);
});
//
test('pop-diminue-count-de-1',()=>{
    const stack=new st.Stack();
    stack.push(1);
    const initial=stack.count();
    stack.pop();
    const second=stack.count();
    expect(second).toEqual(initial-1);
});
//
test('peek-ne-change-pas-le-count',()=>{
    const stack=new st.Stack();
    const initial=stack.count();
    stack.peek();
    const second=stack.count();
    expect(second).toEqual(initial);
});
//
test('pop-pile-vide-retourne-null',()=>{
    const stack=new st.Stack();
    const compte=stack.pop();
    expect(compte).toEqual(null);
});
//
test('peek-pile-vide-retourne-null',()=>{
    const stack=new st.Stack();
    const compte=stack.peek();
    expect(compte).toEqual(null);
});
//
test('pop-retourne-le-dernier-element-empile',()=>{
    const stack=new st.Stack();
    const empil=stack.push();
    expect(stack.pop()).toEqual(empil);
});
//
test('peek-retourne-le-dernier-element-empile',()=>{
    const stack=new st.Stack();
    const empil=stack.push();
    expect(stack.peek()).toEqual(empil);
});
//
test('pop-depile-3-elements-dans-ordre-inverse-empilement',()=>{
    const stack=new st.Stack();
    for (let i=0;i<3;i++){
        stack.push(i);
    }
    for (let i=0;i<3;i++){
        expect(stack.pop()).toEqual(2-i)
    }
})