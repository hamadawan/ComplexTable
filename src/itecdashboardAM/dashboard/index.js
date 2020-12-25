import { Button, Card, CardActions, CardContent, CardHeader, Paper, Typography } from '@material-ui/core';
import React ,{useEffect} from 'react';
import useStyles from './dashboardstyles'
import DashboardTable from './dashboardtable'
import './dashboardstyles.css'


const structure = JSON.parse(JSON.stringify(
    {
        "serviceId": 520,
        "remarks": "Remarks",
        "detailedAnalysis": [
          {
            "questionId": "1",
            "questionText": "Bank Analysis",
            "isAttachmentRequired": true,
            "attachmentsByCoreteam": ["Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg","Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg"],
            "remarkByCoreteam": "Remark",
            "attachmentsByItecteam": ["Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg","Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg"],
            "remarkByItecteam": "Remark by ITeC Team",
            "remarkByItecAM": "Remark by ITeC AM",
            "response": null,
            "stage": "Detailed Analysis",
            "autoPopulate": true
          },
          {
            "questionId": "2",
            "questionText": "Bank credit analysis only",
            "isAttachmentRequired": true,
            "attachmentsByCoreteam": ["Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg","Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg"],
            "remarkByCoreteam": "Remark",
            "attachmentsByItecteam": [],
            "remarkByItecteam": "Remark by ITeC Team",
            "remarkByItecAM": "Remark by ITeC AM",
            "response": null,
            "stage": "Detailed Analysis",
            "autoPopulate": true
          },
          {
            "questionId": "3",
            "questionText": "Detailed accounting",
            "isAttachmentRequired": true,
            "attachmentsByCoreteam": ["Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg","Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg"],
            "remarkByCoreteam": "Remark",
            "attachmentsByItecteam": ["Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg","Uploads/Advith/ITR_DOCS/ServiceId_12/Aadhaar1228646717-5b944d22493f0281cd68a26bfd5c4229.jpg"],
            "remarkByItecteam": "Remark by ITeC Team",
            "remarkByItecAM": "Remark by ITeC AM",
            "response": null,
            "stage": "Detailed Analysis",
            "autoPopulate": true
          }
        ],
        "additionalQuestion": [],
        "assigedUsers": [
          {
            "employeeId": 166,
            "employeeFirstName": "ITechothers",
            "employeeLastName": "others",
            "employeeEmailId": "itecteam.others@gmail.com"
          },
          {
            "employeeId": 163,
            "employeeFirstName": "priya",
            "employeeLastName": "jain",
            "employeeEmailId": "jain.priyan118@gmail.com"
          }
        ],
        "createdBy": "ravikumarg@maveric-systems.com",
        "modifiedBy": "ravikumarg@maveric-systems.com",
        "dateCreated": "2020-12-24T15:42:56.299+05:30",
        "dateModified": "2020-12-24T15:42:56.300+05:30"
    }
))

 const DetailAnalysis = () => {

    const [AnalaysisRows , setAnalysisRows] = React.useState([]);
    const classes = useStyles();

    const headCells = [
        { id: 'questionText', label: 'What to analysis' },
        { id: 'remarkByCoreteam', label: 'Remarks by core team' }
    ];

    const addRemarks = (questionId,remark) => {
        
        const newArray = AnalaysisRows.map(row=>{
            if(row.questionId === questionId)
            {
                row.remarkByItecAM = remark;
            }
            return row;
        })
        setAnalysisRows(newArray)

    }

    const getResults =()=>{
        const data = structure.detailedAnalysis.map((rowData)=>{
            // console.log(rowData,"RowData");
            return rowData;
        });

        setAnalysisRows(data);
    }

useEffect(()=>{
    getResults();
},[])

    return (
<div className={classes.root}>
    <div className="stage-indicator">
        <ul>
            <li>L1 Checklist</li>
            <li>L2 Checklist</li>
            <li>CRC Confirmed</li>
            <li className="active">Detailed Analysis</li>
        </ul>
    </div>
    <Card className="common-card">               
        <CardHeader title=" Detailed Analysis"/>            
        <CardContent>
            <DashboardTable 
                headCells={headCells}
                AnalaysisRows={AnalaysisRows}
                pageName="dashboard"
                action="document"
                addRemarks={addRemarks}
            />
        </CardContent>        
    </Card>       
        <div className="detailed-actions">
            <ul>
                <li>
                    <Button type="button" color="primary" variant="contained" size="large"> Save </Button>
                </li>
                <li>
                    <Button type="button" color="primary" variant="contained" size="large"> Rework </Button>
                </li>
                <li>
                    <Button type="submit" color="primary" variant="contained" size="large"> Submit </Button>
                </li>
            </ul>                
        </div>
    </div>    
    )
}

export default DetailAnalysis;
