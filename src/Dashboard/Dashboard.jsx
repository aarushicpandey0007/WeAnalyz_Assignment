import { Box, Grid, Typography, Paper } from "@mui/material";
import React from "react";
import SideProfile from './SideProfile'; // Adjust the path if necessary
import Navbar from './Navbar'; // Adjust the path if necessary
import NewTicket from "./NewTicket";

const Dashboard = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            {/* Navbar at the top */}
            <Navbar />

            {/* Main content area */}
            <Box sx={{ display: 'flex', flex: 1 }}>
                {/* SideProfile on the left */}
                <SideProfile />

                {/* Dashboard main content */}
                <Box sx={{ flexGrow: 1, backgroundColor: '#fff', p: 2 }}>
                    <Typography variant="h2" sx={{ color: 'black', textAlign: 'center', mt: 4 }}>
                        Dashboard
                    </Typography>

                    {/* Dashboard Cards */}
                    <Grid
                        container
                        spacing={2}
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    backgroundColor: '#2196f3',
                                    color: '#fff',
                                    width: 200,
                                }}
                            >
                                <Typography>Total Tickets</Typography>
                                <Typography variant="h2">12</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    backgroundColor: '#4caf50',
                                    color: '#fff',
                                    width: 200,
                                }}
                            >
                                <Typography>Total Solved</Typography>
                                <Typography variant="h2">8</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    backgroundColor: '#f44336',
                                    color: '#fff',
                                    width: 200,
                                }}
                            >
                                <Typography>Total Awaiting Approval</Typography>
                                <Typography variant="h2">2</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Paper
                                elevation={4}
                                sx={{
                                    padding: 2,
                                    textAlign: 'center',
                                    backgroundColor: '#ffeb3b',
                                    color: '#000',
                                    width: 200,
                                }}
                            >
                                <Typography>Total in Progress</Typography>
                                <Typography variant="h2">2</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Dashboard;

