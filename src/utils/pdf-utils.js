import { StyleSheet } from '@react-pdf/renderer';

const studentPDFStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  section: {
    padding: 20,
    paddingTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexGrow: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottom: '2px solid #CCC'
  },
  title: {
    fontSize: "30px",
    fontFamily: "Roboto",
    padding: 0,
    margin: 0,
    textTransform: "uppercase",
    fontWeight: "bold"
  },
  studentData: {
    padding: "15px 20px 15px 20px",
    gap: 5,
    borderBottom: '2px solid #CCC',
    marginLeft: 20,
    marginRight: 20
  },
  studentDataTableRow: {
    flexDirection: "row"
  },
  studentDataText: {
    fontFamily: "Roboto",
    color: "#999",
    fontSize: 10
  },
  studentDataHeader20: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "20%"
  },
  studentDataHeader20Right: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "20%",
    textAlign: "right"
  },
  studentDataHeader40: {
    backgroundColor: "#333",
    padding: "5px 10px 5px 10px",
    width: "40%"
  },
  studentDataHeader20White: {
    padding: "5px 10px 5px 10px",
    width: "20%"
  },
  studentDataHeader40White: {
    padding: "5px 10px 5px 10px",
    width: "40%"
  },
  studentDataHeaderText: {
    color: "white",
    fontSize: 14,
  },
  studentDataHeaderTextGray: {
    color: "#999",
    fontSize: 12,
  },
  studentDataHeaderTextGrayRight: {
    color: "#999",
    fontSize: 12,
    textAlign: "right"
  },
  resumenText: {
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 12
  }
});

const billStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    justifyContent: 'space-between'
  },
  sectionMain: {
    margin: "20 20 5 20",
    flexGrow: 0,
    flexDirection: 'row',
  },
  section: {
    margin: "5 20",
    flexGrow: 0,
    flexDirection: 'row',
  },
  sectionVertical: {
    margin: "5 20",
    flexGrow: 0,
    flexDirection: 'column',
  },
  bigText: {
    fontSize: 20
  },
  normalText: {
    fontSize: 14
  },
  smallText: {
    fontSize: 11
  },
  smallTextMarginDown: {
    fontSize: 11,
    marginBottom: 20
  },
  marginDown: {
    marginBottom: 20
  }
});

export { studentPDFStyles, billStyles }
