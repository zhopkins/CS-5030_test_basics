
import {todoservice} from './todo.service.js';
// var todoservice = require('./todo.service.js');
describe('todo test suite', () => {

    test("truth_value", () => {
        expect(true).toBe(true);
    });
    
    // let todo_service = new todoservice();

    // test("if service instance is created", () => {
    //     expect(todo_service instanceof todoservice).toBe(true);
    // });

    // // Write all your test cases here
    // test("get_todos", () => {
    //     expect(todo_service.get_todos()).toEqual(todo_service.todo_data);
    // });
});