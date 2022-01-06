<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
		<!-- TODO: Auto-generated template -->
		<html>
		<head>
		</head>
		<body>
		<h1 style="text-align:center">Upcoming Meetings Info</h1>
		<table >
		<tr>
		<th>Title</th>
		<th>Date</th>
		<th>Description</th>
        <th>Duration</th>
		<th>Total_Attendees</th>
		<th>Platform</th>
        <th>Link</th>
		<th>Created By</th>
		</tr>
		<xsl:for-each select="meetings_info/upcomming_meeting">
		<xsl:sort select="date"></xsl:sort>
		<xsl:if test="total_attendees &gt; 6">
		<tr>
		<td>
		<xsl:value-of select="title"></xsl:value-of>
		</td>
        <td>
        <xsl:value-of select="date"></xsl:value-of>
        </td>
		<td>
		<xsl:value-of select="description"></xsl:value-of>
		</td>
		<xsl:choose>
			<xsl:when test="duration &gt; 30">
			  <td bgcolor="red">
			  <xsl:value-of select="duration"/></td>
			</xsl:when>
			<xsl:otherwise>
			  <td><xsl:value-of select="duration"/></td>
			</xsl:otherwise>
		  </xsl:choose>
		
        <td>
		<xsl:value-of select="total_attendees"></xsl:value-of>
		</td>
        <td>
        <xsl:value-of select="platform"></xsl:value-of>
        </td>
        <td>
            <xsl:value-of select="link"></xsl:value-of>
            </td>
        <td>
        <xsl:value-of select="created_by"></xsl:value-of>
        </td>
        
		</tr>
		</xsl:if>
		</xsl:for-each>
		</table>
		</body>
		</html>
	</xsl:template>
</xsl:stylesheet>