import { Component, OnInit } from '@angular/core';
import { Todo } from './../../models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit { // Implementa OnInit para que se ejecute el método ngOnInit() al cargar el componente. Exporta la clase para que pueda ser usada en otros archivos.

  todos: Todo[]; // Declara una variable de tipo Todo[] (array de objetos de tipo Todo) llamada todos.

  inputTodo: string = ""; // Declara una variable de tipo string llamada inputTodo y le asigna el valor "".

  constructor() { }

  ngOnInit(): void {

    this.todos = [ // Asigna un array de objetos de tipo Todo a la variable todos.
      {
        content: 'First todo', // Asigna el valor "First todo" a la propiedad content del objeto.
        completed: false // Asigna el valor false a la propiedad completed del objeto.
      },
      {
        content: 'Second todo',
        completed: true
      }
    ]
  }


  toggleDone(id: number) { // Declara un método llamado toggleDone que recibe un parámetro de tipo number llamado id.
    this.todos.map((v, i) => { // Recorre el array de objetos de tipo Todo y asigna el valor de la propiedad completed del objeto al que corresponda con el id recibido como parámetro. v es el objeto y i es el índice.
      if (i == id) v.completed = !v.completed; // Si el índice es igual al id recibido como parámetro, asigna el valor contrario al que tenía la propiedad completed del objeto.
      return v;
    })
  }

  deleteTodo(id: number) { // Declara un método llamado deleteTodo que recibe un parámetro de tipo number llamado id.
    this.todos = this.todos.filter((v, i) => i !== id); // Recorre el array de objetos de tipo Todo y asigna a la variable todos un array con los objetos que no tengan el índice igual al id recibido como parámetro.
  }

  addTodo() {
    this.todos.push ({ // Añade un objeto de tipo Todo al array de objetos de tipo Todo.
      content: this.inputTodo, // Asigna el valor de la variable inputTodo a la propiedad content del objeto.
      completed: false  // Asigna el valor false a la propiedad completed del objeto.
    });

    this.inputTodo = "";  // Asigna el valor "" a la variable inputTodo.
  }
}
