import Grid from '@material-ui/core/Grid';

import Add from './Add';
import AdminTable from './AdminTable';

const AdminMain = () =>{

    return(
        <Grid container spacing={1}>
            <Grid item xs={12}></Grid>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Add/>
                    </Grid>    
                    <Grid item xs={12}>
                        <AdminTable/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={1}/>
        </Grid>
    );
};

export default AdminMain; 