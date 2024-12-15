<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>College Management System</title>
                <style>
                    table {
                        width: 100%;
                        border-collapse: collapse;
                    }
                    table, th, td {
                        border: 1px solid black;
                    }
                    th, td {
                        padding: 8px;
                        text-align: left;
                    }
                    th {
                        background-color: #f2f2f2;
                    }
                </style>
            </head>
            <body>
                <h1>College Management System</h1>

                <!-- Departments Table -->
                <h2>Departments</h2>
                <table>
                    <tr>
                        <th>DeptCode</th>
                        <th>DeptName</th>
                        <th>HOD</th>
                        <th>OfficeLocation</th>
                        <th>Ph_no</th>
                        <th>Email</th>
                    </tr>
                    <xsl:for-each select="//departments/department">
                        <tr>
                            <td><xsl:value-of select="DeptCode"/></td>
                            <td><xsl:value-of select="DeptName"/></td>
                            <td><xsl:value-of select="HOD"/></td>
                            <td><xsl:value-of select="OfficeLocation"/></td>
                            <td><xsl:value-of select="Ph_no"/></td>
                            <td><xsl:value-of select="Email"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Courses Table -->
                <h2>Courses</h2>
                <table>
                    <tr>
                        <th>CourseCode</th>
                        <th>CourseName</th>
                        <th>Department</th>
                        <th>Credits</th>
                        <th>Semester</th>
                        <th>Description</th>
                        <th>Prerequisites</th>
                    </tr>
                    <xsl:for-each select="//courses/course">
                        <tr>
                            <td><xsl:value-of select="CourseCode"/></td>
                            <td><xsl:value-of select="CourseName"/></td>
                            <td><xsl:value-of select="Department"/></td>
                            <td><xsl:value-of select="Credits"/></td>
                            <td><xsl:value-of select="Semester"/></td>
                            <td><xsl:value-of select="Description"/></td>
                            <td><xsl:value-of select="Prerequisites"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Students Table -->
                <h2>Students</h2>
                <table>
                    <tr>
                        <th>StudentID</th>
                        <th>StudentName</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Ph_no</th>
                        <th>Email</th>
                        <th>Guardian</th>
                        <th>Guardian_Ph_no</th>
                        <th>Course</th>
                    </tr>
                    <xsl:for-each select="//students/student">
                        <tr>
                            <td><xsl:value-of select="StudentID"/></td>
                            <td><xsl:value-of select="StudentName"/></td>
                            <td><xsl:value-of select="DOB"/></td>
                            <td><xsl:value-of select="Address"/></td>
                            <td><xsl:value-of select="Ph_no"/></td>
                            <td><xsl:value-of select="Email"/></td>
                            <td><xsl:value-of select="Guardian"/></td>
                            <td><xsl:value-of select="Guardian_Ph_no"/></td>
                            <td><xsl:value-of select="Course"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Faculty Table -->
                <h2>Faculty</h2>
                <table>
                    <tr>
                        <th>FacultyID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Ph_No</th>
                        <th>Email</th>
                        <th>Department</th>
                        <th>Qualification</th>
                    </tr>
                    <xsl:for-each select="//faculty/facultyMember">
                        <tr>
                            <td><xsl:value-of select="FacultyID"/></td>
                            <td><xsl:value-of select="Name"/></td>
                            <td><xsl:value-of select="DOB"/></td>
                            <td><xsl:value-of select="Address"/></td>
                            <td><xsl:value-of select="Ph_No"/></td>
                            <td><xsl:value-of select="Email"/></td>
                            <td><xsl:value-of select="Department"/></td>
                            <td><xsl:value-of select="Qualification"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Staff Table -->
                <h2>Staff</h2>
                <table>
                    <tr>
                        <th>StaffID</th>
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Address</th>
                        <th>Ph_No</th>
                        <th>Email</th>
                    </tr>
                    <xsl:for-each select="//staff/staffMember">
                        <tr>
                            <td><xsl:value-of select="StaffID"/></td>
                            <td><xsl:value-of select="Name"/></td>
                            <td><xsl:value-of select="DOB"/></td>
                            <td><xsl:value-of select="Address"/></td>
                            <td><xsl:value-of select="Ph_No"/></td>
                            <td><xsl:value-of select="Email"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Library Books Table -->
                <h2>Library Books</h2>
                <table>
                    <tr>
                        <th>BookID</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Publisher</th>
                        <th>PublicationDate</th>
                        <th>Edition</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Location</th>
                    </tr>
                    <xsl:for-each select="//library/books/book">
                        <tr>
                            <td><xsl:value-of select="BookID"/></td>
                            <td><xsl:value-of select="Title"/></td>
                            <td><xsl:value-of select="Author"/></td>
                            <td><xsl:value-of select="ISBN"/></td>
                            <td><xsl:value-of select="Publisher"/></td>
                            <td><xsl:value-of select="PublicationDate"/></td>
                            <td><xsl:value-of select="Edition"/></td>
                            <td><xsl:value-of select="Category"/></td>
                            <td><xsl:value-of select="Quantity"/></td>
                            <td><xsl:value-of select="Location"/></td>
                        </tr>
                    </xsl:for-each>
                </table>

                <!-- Exams Table -->
                <h2>Exams</h2>
                <table>
                    <tr>
                        <th>ExamID</th>
                        <th>CourseCode</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Duration</th>
                        <th>Location</th>
                        <th>MaxMarks</th>
                        <th>FacultyInCharge</th>
                    </tr>
                    <xsl:for-each select="//exams/exam">
                        <tr>
                            <td><xsl:value-of select="ExamID"/></td>
                            <td><xsl:value-of select="CourseCode"/></td>
                            <td><xsl:value-of select="Date"/></td>
                            <td><xsl:value-of select="Time"/></td>
                            <td><xsl:value-of select="Duration"/></td>
                            <td><xsl:value-of select="Location"/></td>
                            <td><xsl:value-of select="MaxMarks"/></td>
                            <td><xsl:value-of select="FacultyInCharge"/></td>
                        </tr>
                    </xsl:for-each>
                </table>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
