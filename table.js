var i = 0
	for (i = 0; i < team.length; i++) {
		document.writeln("<table border='2' width=400 >");
		document.writeln("<tr><td><b>First Name</b></td><td width=220>" + team[i].firstName + "</td></tr>");
		document.writeln("<tr><td><b>Last Name</b></td><td width=220>" + team[i].lastName + "</td></tr>");
		document.writeln("<tr><td><b>E-mail</b></td><td width=220>" + team[i].emailAddress + "</td></tr>");
		document.writeln("<tr><td><b>Job Title</b></td><td width=220>" + team[i].jobTitleName + "</td></tr>");
		document.writeln("<tr><td><b>Salary</b></td><td width=220>" + team[i].salary + "</td></tr><br>");
		document.writeln("<tr><td></td><td>" + team[i].photo + "</td></tr><br>");
		document.writeln("</table>");
	}