import React from 'react';
import {
    TextField,
    Grid,
    Button
} from '@material-ui/core';



const Contact = (props) => {
    return (
        <div className="contact-box">
            <h2>Contact us</h2>
            <form action="https://getform.io/f/0a9d906d-9d5d-48f2-8b8f-a853359c2e84" method="POST">
                <Grid className="contact-grid" container spacing={2}>
                    <Grid className="contact-field-container" item xs={12}>
                        <TextField
                            className="contact-field"
                            label="Name"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid className="contact-field-container" item xs={12}>
                        <TextField
                            label="Phone"
                            name="tel"
                            type="tel"
                            className="contact-field"
                            placeholder="Contact Number"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid className="contact-field-container" item xs={12}>
                        <TextField
                            label="Your Email"
                            name="email"
                            type="email"
                            className="contact-field"
                            placeholder="Email Address"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea name="message" rows="6" placeholder="Enter your Message" />

                    </Grid>
                </Grid>
                <div className="button-row">
                    <Button type="submit"><b>Send</b></Button>
                </div>
            </form>
        </div>
    );
}
export default Contact;




