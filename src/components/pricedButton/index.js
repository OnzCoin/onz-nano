import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-toolbox/lib/button';
import { fromRawOnz } from '../../utils/onz';
import styles from './pricedButton.css';

export const PricedButtonComponent = ({
  balance, fee, label, customClassName, onClick, disabled, type, t,
}) => {
  const hasFunds = balance >= fee;
  return (
    <div className='primary-button'>
      {
        fee &&
          (<span className={`${styles.fee} ${hasFunds ? '' : `${styles.error} error-message`} `}>
            {
              hasFunds ? t('Fee: {{amount}} ONZ', { amount: fromRawOnz(fee) }) :
                t('Insufficient funds for {{amount}} ONZ fee', { amount: fromRawOnz(fee) })
            }
          </span>)
      }
      <Button
        label={label}
        primary={true}
        raised={true}
        type={type || 'button'}
        className={`next-button ${customClassName}`}
        disabled={disabled || (fee && !hasFunds)}
        onClick={onClick} />
    </div>
  );
};

const mapStateToProps = state => ({
  balance: state.account.balance,
});

export default connect(mapStateToProps)(PricedButtonComponent);
