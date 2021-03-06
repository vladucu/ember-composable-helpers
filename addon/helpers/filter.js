import { helper } from '@ember/component/helper';
import { isEmpty } from '@ember/utils';

function filter([callback, array]) {
  if (isEmpty(callback) || !array) {
    return [];
  }

  return array.filter(callback);
}

export default helper(filter);
