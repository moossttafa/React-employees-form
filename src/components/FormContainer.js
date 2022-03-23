import {
  Paper,
  Grid,
  IconButton,
  makeStyles,
  Button,
  TableContainer,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableBody,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import FormControl from "../FormControl/FormControl";
import DeleteIcon from "@material-ui/icons/Delete";
//data
const genderItems = [
  {
    value: "female",
    label: "Female",
  },
  {
    value: "male",
    label: "Male",
  },
  {
    value: "other",
    label: "Other",
  },
];
const DepartmentItems = [
  {
    value: "designer",
    label: "Designer",
  },
  {
    value: "developer",
    label: "Developer",
  },
  {
    value: "marketing",
    label: "Marketing",
  },
  {
    value: "seo",
    label: "SEO",
  },
];
//data
//styles
const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(4),

    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
    "& .MuiButton-root": {
      margin: theme.spacing(0.5),
      textTransform: "capitalize",
    },
    "& .MuiTableCell-root:not(:nth-of-type(2))": {
      textTransform: "capitalize",
    },
  },
}));
const FormContainer = () => {
  const [employees, setEmployees] = useState(
    JSON.parse(localStorage.getItem("employees")) || []
  );
  //initialValues
  const initialValues = {
    fullName: "",
    email: "",
    mobile: "",
    city: "",
    gender: "",
    department: "",
    date: new Date(),
  };
  //validationSchema
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Required"),
    email: Yup.string().email("Email Invalid Format").required("Required"),
    mobile: Yup.number().required("Required"),
    city: Yup.string().required("Required"),
    gender: Yup.string().required("Required"),
    department: Yup.string().required("Required"),
    date: Yup.date().required(),
  });
  //onSubmit
  const onSubmit = (values, action) => {
    const { fullName, email, gender, department } = values;
    const newEmployees = [
      ...employees,
      {
        id: new Date().getTime().toString(),
        fullName,
        email,
        gender,
        department,
      },
    ];
    setEmployees(newEmployees);
    localStorage.setItem("employees", JSON.stringify(newEmployees));
    action.resetForm();
  };
  //function delete item to table
  const deleteItem = (id) => {
    const filter_with_id = employees.filter((emp) => emp.id !== id);
    setEmployees(filter_with_id);
    localStorage.setItem("employees", JSON.stringify(filter_with_id));
  };
  const classes = useStyles();
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          console.log(formik);
          return (
            // Fomr
            <Form>
              <Paper elevation={0} className={classes.root}>
                <Grid container>
                  <Grid item sm={6}>
                    <FormControl
                      control="input"
                      name="fullName"
                      label="Full Name"
                      autoFocus
                    />
                    <FormControl control="input" name="email" label="Email" />
                    <FormControl control="input" name="mobile" label="Mobile" />
                    <FormControl control="input" name="city" label="City" />
                  </Grid>
                  <Grid item sm={6}>
                    <FormControl
                      control="radio"
                      name="gender"
                      options={genderItems}
                      label="Gender"
                    />
                    <FormControl
                      control="select"
                      name="department"
                      options={DepartmentItems}
                      label="Department"
                    />
                    <FormControl
                      control="date"
                      name="date"
                      label="Select Date"
                    />
                    <div>
                      <Button type="submit" variant="contained" color="primary">
                        Submit
                      </Button>
                      <Button type="reset" variant="outlined" color="default">
                        Reset
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </Paper>
            </Form>
          );
        }}
      </Formik>
      {/* Table */}
      <Paper className={classes.root} elevation={0}>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.length ? (
                employees.map((employee) => {
                  const { id, fullName, email, gender, department } = employee;
                  return (
                    <TableRow key={id}>
                      <TableCell>{fullName}</TableCell>
                      <TableCell>{email}</TableCell>
                      <TableCell>{gender}</TableCell>
                      <TableCell>{department}</TableCell>
                      <TableCell>
                        <IconButton
                          color="secondary"
                          onClick={() => deleteItem(id)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <>
                  <TableRow>
                    <TableCell>No Items</TableCell>
                  </TableRow>
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default FormContainer;
