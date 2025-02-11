import React, { useState } from 'react';
import Input from '../../../UI/Input';
import NueButtonDark from '../../../UI/NueButtonDark';
import styles from './styles.module.scss';

const TeamForm = () => {
    const [form, setForm] = useState(false);
    return (
        <div className={styles.formContainer}>
            <div className={styles.textContainer}>
                <h1>Join Samagati now!</h1>
                <p>
                    Become a part of our community where we learn, explore,
                    educate, travel and have lots of fun!
                </p>
            </div>
            {form ? (
                <form>
                    <div>
                        <Input
                            placeholder='Enter your email address'
                            type='email'
                        />
                        <Input
                            placeholder='Enter your email address'
                            type='email'
                        />
                        <Input
                            placeholder='Enter your email address'
                            type='email'
                        />

                        <Input
                            placeholder='Enter your email address'
                            type='email'
                        />
                        <NueButtonDark
                            name='Join'
                            onClick={() => {
                                setForm(true);
                            }}
                        />
                    </div>
                </form>
            ) : (
                <NueButtonDark
                    name='Join'
                    onClick={() => {
                        setForm(true);
                    }}
                />
            )}
        </div>
    );
};

export default TeamForm;
