<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:oxm="https://www.openxsl.com">
    <xsl:template match="/root" name="wurui.user-address">
        <!-- className 'J_OXMod' required  -->
        <div class="J_OXMod oxmod-user-address" ox-mod="user-address">
            <xsl:variable select="data/user-address/i" name="addressbook" />

            <xsl:variable name="selected_addr_id" select="data/user-select/i[type='user-address']/selected"/>

            <ul class="addresslist" ox-refresh="html">
                
                <xsl:for-each select="data/user-address/i">
                    <li>
                        <span class="right-op">
                            <a href="{LINK/edit}">编辑</a>
                        </span>
                        
                        
                        
                        <span class="name"><xsl:value-of select="normalize-space(name)"/></span>
                        <span class="phone"><xsl:value-of select="normalize-space(phone)"/></span>
                        
                        <br/>
                        <xsl:if test="_id = $selected_addr_id">
                            <span class="tag">默认</span>
                        </xsl:if>
                        <span class="detail">
                            <span><xsl:value-of select="normalize-space(province)"/></span>
                            <span><xsl:value-of select="normalize-space(city)"/></span>
                            <span><xsl:value-of select="normalize-space(district)"/></span>
                            <span><xsl:value-of select="normalize-space(street)"/></span>
                            <span><xsl:value-of select="normalize-space(detail)"/></span>
                        </span>
                    </li>
                </xsl:for-each>
            </ul>
            <button class="J_Refresh">Refresh</button>
            <a href="nodata.xml">GOGOGOO</a>
            <div id="log"></div>

        </div>
    </xsl:template>
</xsl:stylesheet>
