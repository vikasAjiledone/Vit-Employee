import * as React from "react";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Button from "@mui/joy/Button";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("1", "new project", 6.0, 24, 4.0),
  createData("2", "new project", 9.0, 37, 4.3),
  createData("3", "new project", 16.0, 24, 6.0),
  createData("4", "new project", 3.7, 67, 4.3),
  createData("5", "new project", 16.0, 49, 3.9),
  createData("6", "new project", 6.0, 24, 4.0),
  createData("7", "new project", 9.0, 37, 4.3),
  createData("8", "new project", 16.0, 24, 6.0),
  createData("9", "new project", 3.7, 67, 4.3),
  createData("10", "new project", 16.0, 49, 3.9),
];

const CostEstimateTable = () => {
  return (
    <div>
      <Typography variant="h1" textAlign="center" sx={{ mb: 2 }}>
        Contractor Infomation Details
      </Typography>
      <Sheet
        sx={{
          "--TableCell-height": "60px",
          // the number is the amount of the header rows.
          "--TableHeader-height": "calc(1 * var(--TableCell-height))",
          height: 400,
          overflow: "auto",
          background: (theme) =>
            `linear-gradient(${theme.vars.palette.background.surface} 30%, rgba(255, 255, 255, 0)),
              linear-gradient(rgba(255, 255, 255, 0), ${theme.vars.palette.background.surface} 70%) 0 100%,
              radial-gradient(
                farthest-side at 50% 0,
                rgba(0, 0, 0, 0.12),
                rgba(0, 0, 0, 0)
              ),
              radial-gradient(
                  farthest-side at 50% 100%,
                  rgba(0, 0, 0, 0.12),
                  rgba(0, 0, 0, 0)
                )
                0 100%`,
          backgroundSize: "100% 40px, 100% 40px, 100% 14px, 100% 14px",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "local, local, scroll, scroll",
          backgroundPosition:
            "0 var(--TableHeader-height), 0 100%, 0 var(--TableHeader-height), 0 100%",
          backgroundColor: "background.surface",
        }}
      >
        <Table stickyHeader>
          <thead>
            <tr>
              <th>Project ID</th>
              <th>Revenue Model </th>
              <th>Total Project Cost</th>
              <th>Maintenance Cost</th>
              <th>BOQ</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.name}>
                <td>{row.name}</td>
                <td>{row.name}</td>
                <td>{row.calories}</td>
                <td>{row.calories}</td>
                <td>{row.fat}</td>
                <td>
                  <Button>
                    <Link
                      to="/ContractInfoView"
                      style={{ textDecoration: "none" }}
                    >
                      <VisibilityIcon />
                    </Link>
                  </Button>
                  <Button sx={{ backgroundColor: "red", mt: 1 }}>
                    <EditIcon />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
    </div>
  );
};

export default CostEstimateTable;
