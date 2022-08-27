/**
 * @jest-environment jsdom
 */
import addToList from '../components/addToList';

describe('Testing Add and Delete functions', () => {
  const { localStorage } = window;

  document.body.innerHTML = `
    <div class="to-do-list-container">
      <div class="list-header">
        <div class="title">Today's To Do</div>
        <div class="sync-image">
        </div>
      </div>
      <hr />
      <div class="task-container">
        <label for="task-input" class="label">
          <form class="task-form">
            <input
              class="task-input"
              id="task-input"
              type="text"
              placeholder="Add to your list..."
              name="task"
            />
          </form>
        </label>
        <div class="return-div">
        </div>
      </div>
      <hr />
      <div class="bottom-area" id="bottom-area" style="visibility: visible;">
        <p class="bottom-text">Clear all completed</p>
      </div>
    </div>
  `;

  test('Testing Adding Function', () => {
    expect(addToList()).toBeUndefined();
  });
});