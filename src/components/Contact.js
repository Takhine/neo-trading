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
                <Grid className="contact-grid" container spacing={2}>
                    <Grid className="contact-field-container" item xs={12}>
                        <TextField
                            className="contact-field"
                            label="Name"
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
                            className="contact-field"
                            placeholder="Email Address"
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <textarea rows="8"></textarea>

                    </Grid>
                </Grid>
                <div className="button-row">
                    <Button onClick={props.toggleDrawer}><b>Send</b></Button>
                </div>
            </div>
    );
}
export default Contact;




