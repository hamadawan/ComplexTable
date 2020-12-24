import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CommentIcon from '@material-ui/icons/Comment';
import ListOfDocumentPopUp from '../listOfDocumentsPopUp';
import RemarkPopUp from '../remarksPopUp'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
        padding: theme.spacing(2),
    },
    thead: {
        fontSize: 16,
        backgroundColor: 'gainsboro',
    },
    tableRow: {
        height: '50px',
    },
    TableHeadCss: {
        fontWeight: '700',
        fontFamily: 'Rubik',
        fontSize: '13px',
        color: '#535353',
        backgroundColor: '#f6f6f6',
    },
}));

const EnhancedTableHead = (props) => {
    const { headCells, classes ,action,pageName } = props;

    return (
        <TableHead size="medium" className={classes.thead}>
            <TableRow>
                {headCells.map((header) => {
                    return (
                        <TableCell key={header.id} align="left"  className={classes.TableHeadCss}>
                            {header.label}
                        </TableCell>
                    );
                })}
                {action && (
                    <>
                        <TableCell align="left"  className={classes.TableHeadCss}>Doc by core Team</TableCell>
                        <TableCell align="left"  className={classes.TableHeadCss}>Doc by ITeC - others</TableCell>
                    </>
                )}
                {
                    pageName && (
                        <TableCell align="left"  className={classes.TableHeadCss}>Remarks</TableCell>
                    )
                }
            </TableRow>
        </TableHead>
    );
};

const DashboardTable = (props) => {
    const { headCells, AnalaysisRows, action, pageName, addRemarks, saveFile } = props;
    const [itecOpen, setItecOpen] = React.useState(false);
    const [RemarkOpen, setRemarkOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState({})

    const classes = useStyles();

    const DataRow = (analysisRow) => {
        return headCells.map((header) => {
            let tableData;
            // console.log(header, 'headerRow');
            // console.log(analysisRow, 'Row Data');
            tableData = (
                <TableCell align="left" key={header.id}>
                    {analysisRow[header.id]}
                </TableCell>
            );
            return tableData;
        });
    };

    const handleRelevence = (row) => {
        setSelectedRow(row)
        setItecOpen(true);
    };
    const handleItecClose = () => {
        setItecOpen(false);
    };

    const handleRemark = (row) => {
        setSelectedRow(row)
        setRemarkOpen(true);
    };
    const handleRemarkClose = () => {
        console.log('------');
        setRemarkOpen(false);
    };

    return (
        <>
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer>
                    <Table className={classes.table}>
                        <EnhancedTableHead classes={classes} headCells={headCells} action={action} pageName={pageName} />
                        <TableBody>
                            {AnalaysisRows.map((rows, index) => {
                                const rowData = DataRow(rows);
                                return (
                                <TableRow hover key={index} className={classes.tableRow}>
                                    {rowData}
                                    {action && (
                                        <>
                                            <TableCell align="left">
                                                <AttachFileIcon 
                                                    onClick={()=>handleRelevence(rows)}
                                                />
                                            </TableCell>
                                            <TableCell align="left">
                                                <Button variant="outlined" component="label" color="primary" className="txt-capitalize">
                                                    Upload
                                                    <input
                                                        type="file"
                                                        hidden
                                                        multiple
                                                        name="images"
                                                        onChange={(event)=>saveFile(rows.questionId,event)}
                                                    />
                                                </Button>                                        
                                            </TableCell>
                                        </>
                                    )}
                                    {
                                        pageName && (
                                            <TableCell>
                                                <CommentIcon 
                                                    onClick={()=>handleRemark(rows)}
                                                />
                                            </TableCell>
                                        )
                                    }
                                </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
        {itecOpen && <ListOfDocumentPopUp itecOpen={itecOpen} handleItecClose={handleItecClose} selectedRow={selectedRow}/>}
        {RemarkOpen && <RemarkPopUp RemarkOpen={RemarkOpen} handleRemarkClose={handleRemarkClose} selectedRow={selectedRow} addRemarks={addRemarks}/>}
        </>
    );
};

export default DashboardTable;
