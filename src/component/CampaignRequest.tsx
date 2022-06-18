import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { campaigns } from '../data/campagin';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {
    Table,
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow,
    TablePagination, 
    Paper
}
    from '@mui/material';
import DialogRequest from './DialogRequest';


function createData(
    id: number,
    desciption: string,
    amount: number,
    recipient: string,
    count: number,
    state: string,
) {
    return { id, desciption, amount, recipient, count, state };
}
const rows = [
    createData(1, 'Frozen yoghurt', 159, 'Frozen yoghurt', 24, 'Pending'),
    createData(2, 'Ice cream sandwich', 237, 'Frozen yoghurt', 37, 'Pending'),
    createData(3, 'Eclair', 262, 'Frozen yoghurt', 24, 'Pending'),
    createData(4, 'Cupcake', 305, 'Frozen yoghurt', 67, 'Pending'),
    createData(5, 'Gingerbread', 356, 'Frozen yoghurt', 49, 'Pending'),
    createData(6, 'Frozen yoghurt', 159, 'Frozen yoghurt', 24, 'Pending'),
    createData(7, 'Ice cream sandwich', 237, 'Frozen yoghurt', 37, 'Pending'),
    createData(8, 'Eclair', 262, 'Frozen yoghurt', 24, 'Pending'),
    createData(9, 'Cupcake', 305, 'Frozen yoghurt', 67, 'Pending'),
    createData(10, 'Gingerbread', 356, 'Frozen yoghurt', 49, 'Pending'),
];

const CampaignRequest = () => {
    const params = useParams<{ campaignId: string }>();
    const navigate = useNavigate();
    const campaign = campaigns.find(campaign => campaign.id.toString() === params.campaignId)
    
    const [isCreate, setIsCreate] = useState(true);
    const [dialogShow, setDialogShow] = useState(false);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
      };

      const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
      };
    const handleDialogShow = () => {
        setDialogShow(!dialogShow);
    }

    useEffect(() => {
        if (!campaign) navigate('..')
    }, [campaign])




    return (
        <Paper sx={{with:'100%'}}>
            <Button 
            sx={{textTransform:'none', fontSize:'16px', float:'right', fontWeight:'700'}}
            variant="contained" 
            startIcon={<AddIcon />}
            onClick={()=>handleDialogShow()}>
                New request
                </Button>
                <DialogRequest
                isCreate={isCreate}
                setIsCreate={setIsCreate}
                show={dialogShow}
                onHide={() => handleDialogShow()}
                />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right" sx={{fontWeight:'700'}}>ID</TableCell>
                            <TableCell sx={{fontWeight:'700'}}>DESCRIPTION</TableCell>             
                            <TableCell align="right" sx={{fontWeight:'700'}}>AMOUNT</TableCell>
                            <TableCell sx={{fontWeight:'700'}}>RECIPIENT</TableCell>
                            <TableCell align="right" sx={{fontWeight:'700'}}>COUNT</TableCell>
                            <TableCell align="right" sx={{fontWeight:'700'}}>STATE</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        .map((row) => (
                            <TableRow
                                key={row.desciption}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="right">{row.id}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.desciption}
                                </TableCell>
                                <TableCell align="right">{row.amount}</TableCell>
                                <TableCell >{row.recipient}</TableCell>
                                <TableCell align="right">{row.count}</TableCell>
                                <TableCell align="right">{row.state}</TableCell>
                            </TableRow>
                        ))}
              

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
        rowsPerPageOptions={[5, 10, 20]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
        </Paper>

    )
}

export default CampaignRequest