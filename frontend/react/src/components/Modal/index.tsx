import React from 'react';
import { useTypedSelector } from '../../hooks/redux';

export default function Modal (): JSX.Element {
  const display = useTypedSelector(state => state.modal.display);
  const Current = useTypedSelector(state => state.modal.Current);

  return (
    display && Current && (
      <div id='modal-mooring'>
        <div className='modal-background'>
          <div className='modal-content'>
            <Current />
          </div>
        </div>
      </div>
    )
  ) || null;
}
