import { Type, Structs, Actions, Tables } from "./reg";

// reg for structs
const StructsReg = "^function.*\)$";
let struct = new Structs("", "", [{}]);

// reg for actions
const ActionsReg = "^.*action:$";
let action = new Actions("", "", false);

var jsonString = JSON.stringify();

