class CreateTodos < ActiveRecord::Migration[7.0]
  def change
    create_table :todos do |t|
      t.string "TODO_NAME"
      t.timestamps
    end
  end
end
