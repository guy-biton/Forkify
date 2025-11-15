import View from './view.js';
import { generateMarkupPreview } from './previewView.js';

class resultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recepies found for your query! Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => generateMarkupPreview(result)).join('');
  }
}
export default new resultsView();
