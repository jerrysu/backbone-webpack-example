import { Model } from 'backbone';

class Todo extends Model {
  // Default attributes for the todo
  // and ensure that each todo created has `title` and `completed` keys.
  defaults() {
    return {
      title: '',
      completed: false
    };
  }

  // Toggle the `completed` state of this todo item.
  toggle() {
    this.save({
      completed: !this.get('completed')
    });
  }
}

export default Todo;
