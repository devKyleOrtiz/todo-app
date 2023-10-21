class TodosController < ApplicationController

     def create
          @todo = Todo.create(todo_params)
          render json: @todo, status: :created
     end

     private

     def todo_params
          params.require(:todo).permit(:TODO_NAME)
     end

end
